import { FC } from "react";
import orderDetailStyles from "./order-detail.module.css";
import doneIcon from "../../../images/done.png";

const OrderDetail: FC = () => {
  return (
    <div className={orderDetailStyles.orderDetaile}>
      <p className={orderDetailStyles.number}>034536</p>
      <p className={orderDetailStyles.identificator}>идентификатор заказа</p>

      <img
        className={orderDetailStyles.icon}
        src={doneIcon}
        width={120}
        height="auto"
        aria-hidden={true}
      />

      <p className="m-2 mt-15 text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="text text_color_inactive text_type_main-default">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export { OrderDetail };
