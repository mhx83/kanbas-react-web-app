import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";  // 导入 BsPlus 图标
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark /> {/* 绿色对勾图标 */}
            <BsPlus className="fs-4 me-2" /> {/* 加号图标，使用右边距调整 */}
            <IoEllipsisVertical className="fs-4" /> {/* 竖向省略号图标 */}
        </div>
    );
}
