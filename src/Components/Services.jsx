import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { servicesRequest } from "../reducers/reducerServices";

export default function Services() {
  const { items, loading, error } = useSelector(state => state.reducerServices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(servicesRequest)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerClick = (id) => {
    navigate(`${id}`)
  }

  const tryAgain = () => {
    dispatch(servicesRequest())
  }

  return (
    <>
      {items &&
        <>
        <div className="services_header">Все услуги:</div>
        <ul className="services">
          {items.map((el) => {
            return (
              <li className="service" key={el.id} onClick={() => handlerClick(el.id)}>
                <div className="service_info">
                  <div className="service_name">{el.name}</div>
                  <div className="service_price">{el.price}</div>
                </div>
              </li>
            )}
          )}
        </ul>
        </>
      }
      {loading && <h3 className="service_loading">Загрузка... Пожалуйста подождите.</h3>}
      {error && <div className="service_error"><h3>Произошла ошибка.</h3><button onClick={tryAgain}>Повторить запрос</button></div>}
    </>
  )
}