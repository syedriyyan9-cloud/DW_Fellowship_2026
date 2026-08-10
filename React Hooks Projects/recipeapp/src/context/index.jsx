import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipelist, setRecipelist] = useState([]);
    const [recipeDetailData, setRecipeDetailData] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);

    function handleAddtoFavorite(curitem) {
        console.log(curitem);

        let cpyfavoritelist = [...favoriteList];

        const index = cpyfavoritelist.findIndex(
            (item) => item.id === curitem.id
        );

        if (index === -1) {
            cpyfavoritelist.push(curitem);
        } else {
            cpyfavoritelist.splice(index, 1);
        }

        setFavoriteList(cpyfavoritelist);
    }

    console.log(favoriteList);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );

            const data = await res.json();

            if (data?.data?.recipes) {
                setRecipelist(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
            }
        } catch (e) {
            console.log(e.message);
            setLoading(false);
            setSearchParam("");
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipelist,
                recipeDetailData,
                setSearchParam,
                handleSubmit,
                setRecipeDetailData,
                favoriteList,
                setFavoriteList,
                handleAddtoFavorite,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;