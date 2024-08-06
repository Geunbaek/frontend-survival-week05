import { useLocalStorage } from 'usehooks-ts';
import { Restaurant, RestaurantMenu } from '../types';

interface MenuRowProps {
  restaurant: Restaurant;
}

function MenuRow({ restaurant }: MenuRowProps) {
  const [, setMenus] = useLocalStorage<RestaurantMenu[]>('buckets', []);

  const handleAddMenu = (menu: RestaurantMenu) => {
    setMenus((prev) => [...prev, menu]);
  };

  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <li key={menu.id}>
              {`${menu.name}(${menu.price.toLocaleString()}원)`}
              <button
                type="button"
                name={`#${menu.name}`}
                onClick={() => handleAddMenu(menu)}
              >
                선택
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default MenuRow;
