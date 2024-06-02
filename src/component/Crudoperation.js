import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Employee } from "./Employee";
import pictures from "../image/logo.jpg";

const Crudoperation = () => {
  const [data, setData] = useState(Employee);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [update, setUpdate] = useState(false);
  const inputReferencesss = useRef(null);
  const [file, setfile] = useState();
  
  

  //   useEffect(()=>{
  // binds data from employee in setData useState
  //      setData(Employee);

  //   },[]);

  const handleDelete = (id) => {
    if (id > 0) {
      const deletes = data.filter((item) => item.id !== id);
      setData(deletes);
    }
    toast.success("Successfully deleted");
  };
  const handleEdit = (id) => {
    // filters gives array of object and finds gives object directly
    // const edits=data.filter((item)=>item.id===id)

    // if(edits!==undefined){
    //     setId(id);
    //     setAge(edits[0].age)
    //     setName(edits[0].name)
    // }

    const edits = data.find((item) => item.id === id);

    if (edits !== undefined) {
      setId(id);
      setAge(edits.age);
      setName(edits.name);
      setUpdate(true);
    }
    toast.success("Edited sucessfully");
  };
  const handleClear = () => {
    setId(null);
    setAge("");
    setName("");
    setUpdate(false);
    
  };

  const handleUpdate = () => {
    const index = data.map((item) => item.id).indexOf(id);
    const dt = [...data];
    dt[index].age = age;
    dt[index].name = name;
    dt[index].file = file;

    setData(dt);

    handleClear();

    toast.success("updated successfully");
  };
  const handleSave = (event) => {
    event.preventDefault();
    const dt = [...data];
    const newdata = {
      id: data.length + 1,
      name: name,
      age: age,
    };

    if (id == null || age > 100) {
      alert("no entry");
    } else {
      dt.push(newdata);
      setData(dt);
    }
    toast.success("Sucessfully saved");
    handleClear();

  };

  // const handleSubmit = (age)=>{
  //   if(age<20){
  //     return "Not elibile for vote"
  //   }else return "eligible for vote"
  // }
  const handleImageClick = () => {
    inputReferencesss.current.click();
  };
  const handleImageChange = (event) => {
    const fil = event.target.files[0];
    setfile(fil);
  };
  

  return (
    <div>
      <div className="flex justify-center">
        <div className=" flex-col bg-gray-400 p-5 gap-5 m-5 w-1/4 rounded-lg shadow-lg">
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <label htmlFor="id">ID</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              placeholder="ID"
              value={id}
              onChange={(event) => setId(event.target.value)}
              required
            />
          </div>

          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <label htmlFor="name">Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <label htmlFor="age">Age</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              placeholder="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
          </div>
          <div onClick={handleImageClick}>
            {file ? (
              <img src={URL.createObjectURL(file)} alt=" " />
            ) : (
              <img src={pictures} alt=" " />
            )}

            <input
              type="file"
              ref={inputReferencesss}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div>
            {!update ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2 m-3"
                onClick={(event) => handleSave(event)}
              >
                save
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2 m-3"
                onClick={() => handleUpdate()}
              >
                update
              </button>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold rounded px-4 py-2 m-3"
              onClick={() => handleClear()}
            >
              clear
            </button>
          </div>
        </div>
      </div>

      <table className="table-auto border w-full">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
            <td>Eligible for Vote</td>
            <td> upload Photo</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>

                <td>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-3"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
                {/* <td>{handleSubmit(item.age)}</td> */}
                <td>{item.age > 20 ? "Vote" : "Not Vote"}</td>

                <td>
                {item.file && (
                  <img src={URL.createObjectURL(item.file)} alt="Preview" style={{ width: '50px' }} />
                )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Crudoperation;
