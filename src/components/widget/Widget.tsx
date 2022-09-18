import './widget.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Widget = ({type}:{type:String}) => {
  let data:any;
  switch (type) {
    case 'user':
      data={
        title: "USERS",
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlineOutlinedIcon className='icon' style={{background: 'rgba(255, 0, 0, 0.2)', color: "crimson"}}/>
      }
      break;

    case 'order':
      data={
        title: "ORDERS",
        isMoney: false,
        link: 'View all orders',
        icon: <ShoppingCartOutlinedIcon className='icon' style={{background: 'rgba(218, 165, 32, 0.2)', color: "goldenrod"}}/>
      }
      break;

    case 'earning':
      data={
        title: "EARNINGS",
        isMoney: true,
        link: 'View net earnings',
        icon: <MonetizationOnOutlinedIcon className='icon' style={{background: 'rgba(0, 128, 0, 0.2)', color: "green"}}/>
      }
      break;

    case 'balance':
      data={
        title: "BALANCE",
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{background: 'rgba(128, 0, 128, 0.2)', color: "purple"}}/>
      }
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <div className="title">
        {data.title}
        </div>
          <div className="number">{data.isMoney && `$ `}100</div>
          <div className="link">
        {data.link}
          </div>
      </div>
      <div className="right">
       <div className="top positive">
        <KeyboardArrowUpOutlinedIcon/>
        20 %
       </div>
       {data.icon}
      </div>
    </div>
  );
};

export default Widget;