
import CartDetail from "@/component/CartDetail";
import { getCartoonById } from "@/service/book.service";
const cartoonPage = async  () => {
 
  return (
  <main>
      <div>
        <CartDetail/>
      </div>
  </main>
 
  );
};

export default cartoonPage;