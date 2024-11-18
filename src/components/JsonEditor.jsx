import { useState } from "react";
import { jsonData } from "../utils/data";

const JsonEditor = () => {
  const [jsonValue, setJsonData] = useState(jsonData);

  const handleJsonEditor = (e) => {
    setJsonData(e.target.value);
  };
  return (
    <div className="md:w-[50%] p-4 max-sm:w-[100%]">
      <div className="border border-gray-700 p-4 rounded-lg">
        <h1 className="text-center uppercase text-2xl font-bold">
          Json Editor
        </h1>

        <textarea
          className="w-[100%] border border-gray-900 bg-gray-800 text-white shadow-lg p-2 rounded-lg"
          value={JSON.stringify(jsonValue, null, 4)}
          onChange={handleJsonEditor}
          rows={22}
        ></textarea>
      </div>
    </div>
  );
};

export default JsonEditor;
