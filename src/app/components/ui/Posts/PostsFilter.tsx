import React from "react";

const PostsFilter: React.FC = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            {/* Фильтр по названию поста */}
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Поиск по названию"
            />

            {/* Фильтр по имени пользователя */}
            <select
                multiple
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option>Пользователь 1</option>
                <option>Пользователь 2</option>
                <option>Пользователь 3</option>
                {/* Добавьте остальные варианты выбора здесь */}
            </select>

            {/* Фильтр по нахождению в списке избранных */}
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>В избранном</span>
            </label>

            {/* Кнопка добавления нового поста */}
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600">
                Добавить пост
            </button>
        </div>
    );
};

export default PostsFilter;