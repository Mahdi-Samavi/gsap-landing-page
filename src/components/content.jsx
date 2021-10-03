import React from 'react';
import Image from '../img/1.png';

export default function content() {
	return (
		<div className="content">
			<img src={Image} alt="Perfume in your hands" className="from-left" />
			<div className="description">
				<h1 className="from-right">لورم ایپسوم متن ساختگی با تولید سادگی</h1>
				<h4 className="from-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</h4>
				<h4 className="from-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</h4>
			</div>
		</div>
	);
}