import React from "react";
import IconSvg from "../../common/IconSvg";

interface IPostCard {
    title: string;
    body: string;
}

const PostCard: React.FC<IPostCard> = ({ title, body }) => {

    return (
        <div className="post bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-500 mb-2">Автор: <span className="font-bold">Имя пользователя</span></p>
            <p className="mb-4">{body}</p>
            <div className="flex items-center space-x-2">
                <button className="btn-comments">
                    <IconSvg name="comments" width="24" height="24" />
                </button>
                <button className="btn-edit">
                    <IconSvg name="edit" width="24" height="24" />
                </button>
                <button className="btn-delete">
                    <IconSvg name="delete" width="24" height="24" />
                </button>
                <button className="btn-favorite">
                    <IconSvg name="bookmark" width="24" height="24" />
                </button>
                <label className="ml-auto">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Выделить</span>
                </label>
            </div>
        </div>
    );
};

export default React.memo(PostCard);
