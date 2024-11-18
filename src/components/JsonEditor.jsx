import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUpdatedJson } from "../store/jsonSlice";

const JsonEditor = () => {
  const dispatch = useDispatch();
  const jsonData = useSelector((store) => store.appData.initialData);

  const [jsonValue, setJsonData] = useState(JSON.stringify(jsonData, null, 4));
  const [isError, setIsError] = useState(false);

  const handleJsonEditor = (e) => {
    const editJson = e.target.value;
    setJsonData(editJson);
    try {
      JSON.parse(editJson);
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const handleJsonSubmit = (e) => {
    e.preventDefault();
    try {
      const editedJson = JSON.parse(jsonValue);
      console.log(editedJson);

      if (isEmpty(editedJson)) {
        alert("JSON is empty..!");
        return;
      }

      dispatch(loadUpdatedJson(editedJson));
      alert("JSON Submitted Successfully..!");
    } catch (error) {
      console.log(error);
      alert("Invalid JSON Format..!");
    }
  };

  return (
    <div className="md:w-[50%] p-4 max-sm:w-[100%]">
      <div className="border border-gray-700 p-4 rounded-lg">
        <h1 className="text-center uppercase text-2xl font-bold">
          Json Editor
        </h1>

        <textarea
          className="w-[100%] border border-gray-900 bg-gray-800 text-white shadow-lg p-4 rounded-lg"
          value={jsonValue}
          onChange={handleJsonEditor}
          rows={25}
        ></textarea>

        {isError && <p className="py-2 text-red-800">Invalid JSON Format..!</p>}

        <input
          className={`border border-gray-400 p-2 w-[100%] bg-gray-700 text-white rounded-md font-bold hover:bg-gray-800 hover:text-white hover:font-bold ${
            isError ? "cursor-not-allowed" : "cursor-pointer"
          } `}
          type="submit"
          onClick={handleJsonSubmit}
          value={"Submit Updated JSON"}
        />
      </div>
    </div>
  );
};

export default JsonEditor;
