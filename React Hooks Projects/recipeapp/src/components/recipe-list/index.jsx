import { Link } from "react-router-dom";

function RecipeItem({ item }) {
    return (
        <div className="group w-full overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="w-full aspect-4/3 overflow-hidden bg-gray-100">
                <img
                    src={item?.image_url}
                    alt="recipe item"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                <span className="inline-block text-sm font-medium text-orange-500 mb-2">
                    {item?.publisher}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug line-clamp-2 min-h-14">
                    {item?.title}
                </h3>

                <Link
                    to={`/recipe-item/${item?.id}`}
                    className="inline-block mt-5 w-full text-center rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-orange-600 active:scale-[0.98]"
                >
                    Recipe Details
                </Link>

            </div>
        </div>
    );
}

export default RecipeItem;