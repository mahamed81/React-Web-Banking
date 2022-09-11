import { ACCOUNTS } from "../../app/shared/accounts";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../users/userSlice";
import UserLoginForm from "../users/userLoginForm";

const Transaction = () => {
  const account = useSelector(selectCurrentUser);

  const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    return new Intl.DateTimeFormat(locale).format(date);
  };

  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const displayMovements = function (acc, sort = false) {
    const temp = {
      date: [],
      move: [],
      type: [],
    };
    console.log(acc);
    if (acc.movements === null) {
      console.log("no");
    } else {
      const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;

      movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementDate(date, acc.locale);

        const formattedMov = formatCur(mov, acc.locale, acc.currency);

        temp.date.push(displayDate);
        temp.move.push(formattedMov);
        temp.type.push(type);
      });
      return temp;
    }
  };
    if(account === null){
      return(
        <UserLoginForm/>
      )
    }
     
      const { date, move, type } = displayMovements(account);
    

  return (
    <>
     <div>
      <UserLoginForm/>
    </div>
<div className="movements">
  {move.map((move, ind) => {
    return (
      <>
        <div className="movements__row">
          <div className={`movements__type movements__type--${type[ind]}`}>
            {ind + 1}
          </div>
          <div className="movements__date">{date[ind]}</div>
          <div className="movements__value">{move}</div>
        </div>
      </>
    );
  })}
</div>
    </>
   
  );
};

export default Transaction;
