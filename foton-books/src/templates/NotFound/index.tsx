import Base from 'templates/Base';
import ErrorMessage from 'components/ErrorMessage';

import * as S from './styles';

const NotFoundPage = () => (
  <Base>
    <S.Wrapper>
      <S.Title>Página não encontrada!</S.Title>
      <S.Message>
        Oh não, parece que a página que está procurando não existe! Volte e
        tente acessar outra página.
      </S.Message>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg2528"
        version="1.1"
        style={{ maxWidth: '157px' }}
      >
        <path
          transform="scale(0.26458334)"
          style={{ fill: '#000000' }}
          d="M 36 9 C 21.042 9 9 21.042 9 36 L 9 324 C 9 338.958 21.042 351 36 351 L 564 351 C 578.958 351 591 338.958 591 324 L 591 36 C 591 21.042 578.958 9 564 9 L 36 9 z M 36 27 L 564 27 C 568.986 27 573 31.014 573 36 L 573 324 C 573 328.986 568.986 333 564 333 L 36 333 C 31.014 333 27 328.986 27 324 L 27 36 C 27 31.014 31.014 27 36 27 z "
          id="rect818"
        />
        <g
          id="text826"
          style={{
            fontWeight: 'bold',
            fontSize: '50px',
            letterSpacing: '0px',
            wordSpacing: '0px',
            textAnchor: 'middle',
            fill: '#000000',
            strokeWidth: '0.26458335px'
          }}
          transform="scale(0.99852009,1.0014821)"
          aria-label="404"
        >
          <path
            id="path4802"
            d="M 52.560556,54.687697 H 48.676937 V 23.777257 H 38.373457 L 17.68724,55.242499 v 7.212436 h 22.667655 v 8.876844 h 8.322042 v -8.876844 h 3.883619 z m -25.203897,0 12.998236,-19.814385 v 19.814385 z"
          />
          <path
            id="path4804"
            d="m 61.260308,47.554518 c 0,17.119628 7.846496,24.886867 17.436659,24.886867 9.590162,0 17.436658,-7.767239 17.436658,-24.886867 0,-17.119628 -7.846496,-24.886867 -17.436658,-24.886867 -9.590163,0 -17.436659,7.767239 -17.436659,24.886867 z m 8.322042,0 c 0,-9.590162 3.011786,-17.119628 9.114617,-17.119628 6.10283,0 9.114616,7.529466 9.114616,17.119628 0,9.590162 -3.011786,17.119628 -9.114616,17.119628 -6.102831,0 -9.114617,-7.529466 -9.114617,-17.119628 z"
          />
          <path
            id="path4806"
            d="m 139.71288,54.687697 h -3.88361 v -30.91044 h -10.30348 l -20.68622,31.465242 v 7.212436 h 22.66765 v 8.876844 h 8.32205 v -8.876844 h 3.88361 z m -25.20389,0 12.99823,-19.814385 v 19.814385 z"
          />
        </g>
      </svg>
    </S.Wrapper>
  </Base>
);

export default NotFoundPage;
