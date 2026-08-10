import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

function Details() {
    const { id } = useParams();

    const {
        recipeDetailData,
        setRecipeDetailData,
        handleAddtoFavorite,
        favoriteList,
    } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetials() {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );

            const data = await res.json();

            if (data?.data) {
                setRecipeDetailData(data?.data);
            }
        }

        getRecipeDetials();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Image */}
                        <div className="w-full h-64 sm:h-80 lg:h-full lg:min-h-150 bg-gray-100">
                            <img
                                src={recipeDetailData?.recipe?.image_url}
                                alt="recipe item"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Recipe Information */}
                        <div className="p-6 sm:p-8 lg:p-10">

                            {/* Publisher */}
                            <span className="inline-block text-sm sm:text-base font-semibold text-orange-500 uppercase tracking-wide">
                                {recipeDetailData?.recipe?.publisher}
                            </span>

                            {/* Title */}
                            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                                {recipeDetailData?.recipe?.title}
                            </h1>

                            {/* Favorite Button */}
                            <div className="mt-6">

                                <button
                                    onClick={() =>
                                        handleAddtoFavorite(recipeDetailData?.recipe)
                                    }
                                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 active:scale-[0.98] transition duration-200 shadow-sm"
                                >
                                    {favoriteList &&
                                        favoriteList.length > 0 &&
                                        favoriteList.findIndex(
                                            (item) =>
                                                item.id === recipeDetailData?.recipe?.id
                                        ) !== -1
                                        ? "Remove from favorite"
                                        : "Add to favorite"}
                                </button>

                            </div>

                            {/* Divider */}
                            <div className="my-8 border-t border-gray-200"></div>

                            {/* Ingredients */}
                            <div>

                                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                                    Ingredients
                                </h2>

                                <ul className="space-y-3">

                                    {recipeDetailData?.recipe?.ingredients.map(
                                        (ingredient, index) => (
                                            <li
                                                key={index}
                                                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg bg-gray-50"
                                            >
                                                <span className="font-semibold text-orange-600 min-w-25">
                                                    {ingredient.quantity} {ingredient.unit}
                                                </span>

                                                <span className="text-gray-700">
                                                    {ingredient.description}
                                                </span>
                                            </li>
                                        )
                                    )}

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Details;
