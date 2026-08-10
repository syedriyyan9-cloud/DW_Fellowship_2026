import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";
import RecipeItem from "../../components/recipe-list/index.jsx";

function Home() {
    const { recipelist, loading } = useContext(GlobalContext);

    if (loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

                    <p className="mt-4 text-lg font-semibold text-gray-600">
                        Loading recipes...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {recipelist && recipelist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                        {recipelist.map((item) => (
                            <RecipeItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="min-h-[60vh] flex items-center justify-center">

                        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 sm:px-10 text-center">

                            <div className="text-5xl mb-5">
                                🍳
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                No Recipes Found
                            </h2>

                            <p className="text-gray-500 text-sm sm:text-base">
                                Nothing to show. Please search for something to find recipes.
                            </p>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}

export default Home;
