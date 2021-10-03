import Perfume1 from '../img/perfume1.png';
import Perfume2 from '../img/perfume2.png';
import Perfume3 from '../img/perfume3.png';

export default function products() {
	return (
		<div className="products">
			<div className="product from-bottom">
				<div className="product-image">
					<img src={Perfume1} alt="Perfume 1" />
				</div>
				<div className="product-desc">
					<h6>عطر با کیفیت عالی</h6>
					<h4>N5 Chanel</h4>
				</div>
				<a href="#" className="product-buy" >خرید</a>
			</div>
			<div className="product from-bottom">
				<div className="product-image">
					<img src={Perfume2} alt="Perfume 2" />
				</div>
				<div className="product-desc">
					<h6>عطر با کیفیت عالی</h6>
					<h4>N5 Chanel</h4>
				</div>
				<a href="#" className="product-buy" >خرید</a>
			</div>
			<div className="product from-bottom">
				<div className="product-image">
					<img src={Perfume3} alt="Perfume 3" />
				</div>
				<div className="product-desc">
					<h6>عطر با کیفیت عالی</h6>
					<h4>N5 Chanel</h4>
				</div>
				<a href="#" className="product-buy" >خرید</a>
			</div>
		</div>
	);
}