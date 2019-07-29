import React from 'react'
import ShoppingList from './ShoppingList'
import Picture from './Picture'

export default class ReactProps extends React.Component {
	render() {
		const picture = {
			src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
		};
		return (
			<div>
				<ShoppingList name="彭" />
				<Picture src={picture.src}>
					<span>
						这是一张图片啊
                    </span>
				</Picture>
			</div>

		)
	}
}