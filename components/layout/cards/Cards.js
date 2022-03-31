import { theme } from '../../../utils/ThemeConfig';
import styled from 'styled-components';
import { Button } from '../../widgets/Button';

const StyledCard = styled.div`
	background-color: ${theme.colors.background.surface100};
	display: flex;
	flex-direction: column;
  padding: 5rem;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0 0 2rem 0;
  ${theme.stylized.small}
`;

const H3 = styled.h3`
  color: ${theme.colors.main};
`;

const Li = styled.li`
  padding: .75rem 0;
`;

export const Card01 = () => {
	return (
		<>
			<StyledCard>
				<H3>Card Title</H3>
				<List>
					<li>List Item 1</li>
					<li>List Item 2</li>
					<li>List Item 3</li>
					<li>List Item 4</li>
					<li>List Item 5</li>
					<li>List Item 6</li>
				</List>
				<Button>Button 01</Button>
			</StyledCard>
		</>
	);
};
