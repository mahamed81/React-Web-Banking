import { formatCur } from "../../util/formatCur";
import { setBalance, getBalance } from "../users/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Balance = (props) => {
  const { account } = props;
  const blnc = useSelector(getBalance);

  console.log("State balance is: " + blnc);
  

  return (
    <div class="balance">
      <div>
        <p class="balance__label">Current balance</p>
        <p class="balance__date">
          As of <span class="date">05/03/2037</span>
        </p>
      </div>
      <p class="balance__value">{blnc}€</p>
    </div>
  );
};

export default Balance;
