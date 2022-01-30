import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<>
			<div class="container">
				<div class="mt-4 p-5  bg-light text-dark rounded">
					<h1>Jumbotron Example</h1>
					<p>
						In entirely be to at settling felicity. Fruit two match
						men you seven share. Needed as or is enough points.
						Miles at smart ﻿no marry whole linen mr. Income joy nor
						can wisdom summer. Extremely depending he gentleman
						improving intention rapturous as.
					</p>
					<button type="button" class="btn btn-primary">
						Call to Action!
					</button>
				</div>
			</div>
			<br />
			<div class="container">
				<div class="card-deck row">
					<div class="col px-0 mx-2 card">
						<img
							class="card-img-top"
							src="http://via.placeholder.com/500x325"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur.
							</p>
						</div>
						<div class="card-footer ">
							<button type="button" class="btn btn-primary mx-5">
								Find Out More!
							</button>
						</div>
					</div>
					<div class="col mx-2 px-0 card">
						<img
							class="card-img-top"
							src="http://via.placeholder.com/500x325"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur.
							</p>
						</div>
						<div class="card-footer">
							<button type="button" class="btn btn-primary mx-5">
								Find Out More!
							</button>
						</div>
					</div>
					<div class="col px-0 mx-2 card">
						<img
							class="card-img-top"
							src="http://via.placeholder.com/500x325"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur.
							</p>
						</div>
						<div class="card-footer">
							<button type="button" class="btn btn-primary mx-5">
								Find Out More!
							</button>
						</div>
					</div>
					<div class="col card mx-2 px-0">
						<img
							class="card-img-top"
							src="http://via.placeholder.com/500x325"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur.
							</p>
						</div>
						<div class="card-footer">
							<button type="button" class="btn btn-primary mx-5">
								Find Out More!
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
