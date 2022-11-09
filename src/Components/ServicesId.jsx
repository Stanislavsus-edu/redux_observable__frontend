import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { servicesIdRequest, servicesIdReset } from "../reducers/reducerServicesId";

export default function ServicesId() {
  const { item, loading, error } = useSelector(state => state.reducerServicesId);
  const dispatch = useDispatch()
  const postId  = useParams();

  useEffect(() => {
    dispatch(servicesIdReset())
    dispatch(servicesIdRequest(postId.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tryAgain = () => {
    dispatch(servicesIdReset())
    dispatch(servicesIdRequest(postId.id))
  }

  return (
    <>
      {item &&
        <>
          <div className="service" key={item.id}>
            <div className="service_info" style = {{cursor: "auto"}}>
              <div className="service_name">{item.name}</div>
              <div className="service_price">{item.price}</div>
            </div>
            <div className="service_content">{item.content}</div>
          </div>
          <nav className="service_navigation"><Link to="/">Сервисы</Link></nav>
        </>
      }
      {loading && <h3 className="service_loading">Загрузка... Пожалуйста подождите.</h3>}
      {error && <div className="service_error"><h3>Произошла ошибка.</h3><button onClick={tryAgain}>Повторить запрос</button></div>}
    </>
  )
}