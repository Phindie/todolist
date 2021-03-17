import React, { useState } from "react";
import { v4 as createId } from "uuid";
import { HashRouter, Switch, Router, useParams } from "react-router-dom";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";

const EditWrapper = (props) => {
  const { list, ...remainProps } = props;
  const { taskId } = useParams();
  const { name } = list.find((item) => item.id === taskId);

  return <Edit {...remainProps} taskId={taskId} initialName={name} />;
};

const App = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (name) => {
    setList([{ id: createId(), name, checked: false }, ...list]);
  };

  const handleEditItem = (taskId, name) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        name,
      };
    });
    setList(newList);
  };

  
  return (
    <HashRouter>
      <Switch>
        <Router
          path="/edit/:taskId"
          children={<EditWrapper list={list} onSave={handleEditItem} />}
        />
        <Router path="/add/" children={<Add onSave={handleAddItem} />} />
        <Router path="/" children={<Home list={list} />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
