import "../styles.css";
import dynamic from "next/dynamic";
import type { AppProps } from 'next/app';
import type { CustomAppProps } from '../components/core/CustomAppProps';
import { TinaEditProvider } from "tinacms/dist/edit-state";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const NEXT_PUBLIC_HIDE_EDIT_BUTTON =
  process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON || 0;

const App = ({ Component, pageProps }: AppProps<CustomAppProps>) => {
  return (
    <>
      <TinaEditProvider
        showEditButton={!Boolean(Number(NEXT_PUBLIC_HIDE_EDIT_BUTTON))}
        editMode={
          <TinaCMS
            branch="master"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
            mediaStore={TinaCloudCloudinaryMediaStore}
            cmsCallback={(cms) => {
              import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
                cms.plugins.add(MarkdownFieldPlugin);
              });
            }}
            documentCreatorCallback={{
              /**
               * After a new document is created, redirect to its location
               */
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                return (window.location.href = relativeUrl);
              },
              /**
               * Only allows documents to be created to the `Blog Posts` Collection
               */
              filterCollections: (options) => {
                return options.filter(
                  (option) => option.label === "Blog Posts"
                );
              },
            }}
            /**
             * Treat the Global collection as a global form
             */
            formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
              if (formConfig.id === "getGlobalDocument") {
                return createGlobalForm(formConfig);
              }

              return createForm(formConfig);
            }}
            {...pageProps}
          >
            {
              (livePageProps) => {
                return (
                  <Component {...livePageProps} />
                );
              }
            }
          </TinaCMS>
        }
      >
        {
          <Component {...pageProps} />
        }
      </TinaEditProvider>
    </>
  );
};

export default App;
