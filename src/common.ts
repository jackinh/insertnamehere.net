import styled from '@emotion/styled'

export const Text = styled.p(
    {
        margin: 0
    }
);

const tokenSearchKey = "token"
const tokenIdSearchKey = "tokenId"

export function GetTokenAndTokenIdFromSearch(search: string) : { token: string; tokenId: string } | undefined {    
    let searchParams = new URLSearchParams(search);
    if(!searchParams.has(tokenSearchKey) || !searchParams.has(tokenIdSearchKey)) {
        console.error(`Missing ${tokenSearchKey} or ${tokenIdSearchKey} in page search '${location.search}'`)
        return;
    }

    return { token: searchParams.get(tokenSearchKey), tokenId: searchParams.get(tokenIdSearchKey) };
}