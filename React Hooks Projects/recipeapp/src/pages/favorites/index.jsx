import { GlobalContext } from "../../context/index.jsx";
import { useContext } from "react";
import RecipeItem from "../../components/recipe-list/index.jsx";

function Favorites() {
    const { favoriteList } = useContext(GlobalContext);

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {favoriteList && favoriteList.length > 0 ? (
                    <>
                        {/* Page Heading */}
                        <div className="mb-8 text-center sm:text-left">

                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                Your Favorites
                            </h1>

                            <p className="mt-2 text-gray-500">
                                Your saved recipes
                            </p>

                        </div>

                        {/* Recipe Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

                            {favoriteList.map((item) => (
                                <RecipeItem
                                    key={item.id}
                                    item={item}
                                />
                            ))}

                        </div>
                    </>
                ) : (
                    /* Empty Favorites */
                    <div className="min-h-[65vh] flex items-center justify-center">

                        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 sm:px-10 text-center">

                            <div className="text-5xl mb-5">
                                ❤️
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                                No Favorites Yet
                            </h2>

                            <p className="text-gray-500 text-sm sm:text-base">
                                Nothing is added to favorites. Start saving your favorite
                                recipes and they will appear here.
                            </p>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}

export default Favorites;