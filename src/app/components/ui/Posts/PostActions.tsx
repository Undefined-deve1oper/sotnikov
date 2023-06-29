import React from "react";
import IconSvg from "../../common/IconSvg";

interface IPostActionsProps {
    onDelete: () => void;
    onEdit: () => void;
    onSave: () => void;
    onComment: () => void;
}

const PostActions: React.FC<IPostActionsProps> = ({
    onDelete,
    onEdit,
    onSave,
    onComment,
}) => {
    return (
        <div className="flex items-center gap-6">
            <button className="hover:fill-blue-300 cursor-pointer" onClick={onComment}>
                <IconSvg name="comments" width="24px" height="24px" />
            </button>
            <button onClick={onEdit}>
                <IconSvg name="edit" width="24px" height="24px" />
            </button>
            <button onClick={onDelete}>
                <IconSvg name="delete" width="24px" height="24px" />
            </button>
            <button onClick={onSave}>
                <IconSvg name="bookmark" width="24px" height="24px" />
            </button>
        </div>
    );
};

export default PostActions;
