import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalListItem from '../AnimalListItem/AnimalListItem';
import { useHistory } from 'react-router-dom';

// DO NOT MODIFY THIS FILE FOR BASE MODE!



function AnimalList() {
  const dispatch = useDispatch();
  let zooAnimals = useSelector(store => store.zooAnimals);

  // create a variable that allows access
// to useHistory module from react
const history = useHistory();

  // on load, dispatch the saga action
  useEffect(() => {
    console.log('in useEffect');
    dispatch({ type: 'GET_ZOO_ANIMALS' });
    
  }, []);

  // Renders the list of animals
  return (
    <>
    <table className='AnimalList'>
      <thead>
        <tr>
          <th>Species</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {/* Render each item from the zooAnimal reducer */}
        {zooAnimals.map((classData, i) => {
          return <AnimalListItem key={i} classData={classData} />;
        })}
      </tbody>
    
    </table>
      <button onClick={(event) => history.push('/add')}>Add Animal</button >
      </>
  );
}

export default AnimalList;
