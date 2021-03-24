import React, { useState, useEffect } from "react";
import { v4 as createId } from "uuid";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import identity from "netlify-identity-widget";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";

const EditWrapper = (props) => {
  const { list, ...remainingProps } = props;
  const { taskId } = useParams();

  if (list.length < 1) {
    return <div>Loading...</div>;
  }

  const { name } = list.find((item) => item.id === taskId);
  return <Edit {...remainingProps} taskId={taskId} initialName={name} />;
};

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const listAsString = window.localStorage.getItem("list");

    if (listAsString) {
      setList(JSON.parse(listAsString));
    }
    setLoaded(true);

    identity.init();
    const userObj = identity.currentUser();

    if (!userObj) {
      identity.open();
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list, loaded]);

  const handleAddItem = (name) => {
    setList([{ id: createId(), name, checked: false }, ...list]);
    window.location.replace("/");
  };

  const handleCheckToggle = (taskId) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        checked: !item.checked,
      };
    });
    setList(newList);
  };

  const handleDeleteItem = (taskId) => {
    const newList = list.filter((item) => item.id !== taskId);

    setList(newList);
    window.location.replace("/");
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
    window.location.replace("/");
  };



  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/edit/:taskId"
          children={
            <EditWrapper
              list={list}
              onSave={handleEditItem}
              userName={null}
              onLogin={console.log}
              onUserClick={console.log}
            />
          }
        />
        <Route
          path="/add/"
          children={
            <Add
              onSave={handleAddItem}
              userName={null}
              onLogin={console.log}
              onUserClick={console.log}
            />
          }
        />

        <Route path="/">
          children=
          {
            <Home
              list={list}
              onCheckToggle={handleCheckToggle}
              onDeleteItem={handleDeleteItem}
              userName={null}
              onLogin={console.log}
              onUserClick={console.log}
            />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
