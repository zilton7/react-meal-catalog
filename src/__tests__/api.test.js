import axios from 'axios';
import { mealsByCategoryURL } from '../api';

describe('Api data', () => {
  it('Tests if Meal data is received', async () => {
    const url = mealsByCategoryURL('Vegan');
    const data = await axios.get(url).then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });
});
