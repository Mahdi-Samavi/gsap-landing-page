import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import Menu from './components/menu';
import Content from './components/content';
import Products from './components/products';
import Logo from './img/logo.png';
import './App.css';

function App() {
	useEffect(() => {
		gsap.defaults({x: 0, y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'power4.out'});
		gsap.to(['.logo', '.menu li', '.user li'], {});
		gsap.to(['.content img', '.content h1', '.content h4'], {}, 1);
		gsap.to('.product', {}, 1.6);
	});

	return (
		<React.Fragment>
			<header>
				<Container>
					<Row>
						<Col md={2}><span className="logo from-right">لوگو</span></Col>
						<Col md={6}>
							<Menu />
						</Col>
						<Col md={2}>
							<ul className="user">
								<li className="from-left">
									<a href="#">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
									</a>
								</li>
								<li className="from-left">
									<a href="#">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</header>
			<Content />
			<Products />
		</React.Fragment>
	);
}

export default App;
