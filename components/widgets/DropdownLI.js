import styled from 'styled-components';
import FullArrowRight from '../../public/icons/2px/FullArrowRight';
import { FlexBox } from '../util/FlexBox';
import { theme } from '../../utils/ThemeConfig';
import { AniAppearRight } from '../../utils/Animations';
import { AniToColor } from '../../utils/Animations';

const ListItem = styled.li`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: max(100%, 14rem);
	padding: 0.5rem;
	border-radius: 0.375rem;
	flex-shrink: 1;
	&:hover {
		background-color: ${theme.colors.background.bg00};
	}
	&:focus {
		outline: 2px solid ${theme.colors.main};
	}
`;

export const DropdownLI = (props) => {
	return (
		<>
			<ListItem>
				<FlexBox gap='1rem' alignItems='center'>
					<AniToColor hoverTarget={ListItem}>{props.icon || 'n/a'}</AniToColor>
					{props.text || 'DropDownLI'}
				</FlexBox>
				<AniAppearRight hoverTarget={ListItem}>
					<FullArrowRight
						color={theme.colors.main}
						width='1.2rem'
						height='1.2rem'
					/>
				</AniAppearRight>
			</ListItem>
		</>
	);
};
