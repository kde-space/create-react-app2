import React from 'react';
import InputForm from '../containers/InputForm';
import FilterTodoList from '../containers/FilterTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <InputForm />
    <FilterTodoList />
    <Footer />
  </div>
);

export default App;