import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <section className="py-5 text-center container">
        <div className="py-[13rem]">
          <div className="">
            <h1 className="font-semibold text-5xl">Oops..!</h1>
            <p className="text-red-700 text-2xl pt-2">
              <i>
                {err.status} {err.statusText}
              </i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
