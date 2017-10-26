import React from 'react';

const LogoAtom = props => {
  return (
    <svg viewBox="0 0 131 120">
      <path fill={props.color} d="m93.9043 3.31445c-7.1583 0.27176-15.3127 4.93867-23.9414 12.4414-8.6287 7.5028-17.6384 17.9918-25.7461 30.4766-9.6092 14.7968-16.1445 29.5975-18.957 41.8203-1.40628 6.1114-1.8974 11.5821-1.26562 16.1992 0.631776 4.6171 2.48684 8.54798 5.92578 10.7812 3.26347 2.11933 7.36208 2.31807 11.582 1.22266 4.21995-1.09541 8.72861-3.45051 13.4492-6.81445a2.50035 2.50035 0 1 0 -2.90234 -4.07227c-4.38299 3.12335-8.4554 5.17747-11.8047 6.04688-3.34929 0.8694-5.80809 0.58852-7.60156-0.57618-1.88768-1.22587-3.18575-3.54165-3.69531-7.26562-0.5096-3.7237-0.1289-8.688 1.1855-14.4002 2.6288-11.4243 8.9344-25.8349 18.2754-40.2187 7.8815-12.1364 16.6503-22.3083 24.8359-29.4258 8.1857-7.1175 15.8813-11.0301 20.8516-11.2188 1.83966-0.069842 3.27072 0.30108 4.44922 1.06641 1.76906 1.14884 3.01473 3.24429 3.59375 6.5918 0.57903 3.34751 0.39323 7.81387-0.62305 12.9863a2.50025 2.50025 0 1 0 4.90626 0.964844c1.0964-5.58026 1.37649-10.571 0.64453-14.8027-0.73197-4.2317-2.57418-7.83948-5.79883-9.93359-2.1511-1.39655-4.7113-1.96974-7.3637-1.86905z"/>
      <path fill={props.color} d="m57.2109 34.4062c-15.37 0.05172-29.0744 2.15972-39.2383 5.82812-5.08193 1.8342-9.29147 4.05067-12.4043 6.74023-3.11282 2.68956-5.18244 5.99541-5.37695 9.70703-0.185282 3.53539 1.36449 6.8933 3.93945 9.78711s6.19985 5.45474 10.6621 7.75391a2.50025 2.50025 0 1 0 2.28906 -4.44531c-4.0871-2.1059-7.23033-4.4027-9.21471-6.6328-1.98439-2.2301-2.78521-4.2623-2.6836-6.2011 0.10672-2.0364 1.21841-4.0809 3.6543-6.1856 2.43591-2.1047 6.14241-4.1277 10.832-5.8203 9.37934-3.38526 22.6394-5.48105 37.5566-5.53125 3.07965-0.01036 6.23738 0.07746 9.45508 0.246094 17.1272 0.897597 32.4908 4.26669 43.2754 8.85547 5.3923 2.29439 9.62767 4.90458 12.3398 7.50586 2.71217 2.60128 3.82484 5.01362 3.70703 7.26172-0.10186 1.94354-1.11388 3.8898-3.32813 5.90625-2.21425 2.01644-5.59288 3.97655-9.89258 5.64453a2.50025 2.50025 0 1 0 1.8086 4.66016c4.69467-1.8212 8.57963-3.99436 11.4512-6.60938 2.87154-2.61501 4.76752-5.7984 4.95312-9.33984 0.21459-4.09447-1.87548-7.90751-5.23828-11.1328-3.3628-3.2253-8.07435-6.0432-13.8438-8.49805-11.5388-4.90969-27.3516-8.32272-44.9707-9.24609-3.29723-0.1728-6.54574-0.26463-9.73242-0.253906z"/>
      <path fill={props.color} d="m40.25 0.537109c-1.52727 0.114547-3.01534 0.50537-4.38477 1.20313-3.65417 1.86189-5.91209 5.58067-7.02539 10.1094-1.1133 4.52871-1.19989 10.0244-0.44336 16.2539 1.51307 12.4591 6.46044 27.8727 14.4707 43.5938 8.01004 15.7206 17.5659 28.7795 26.75 37.3262 4.59204 4.27331 9.08622 7.43423 13.4023 9.19531 4.31612 1.76108 8.64897 2.1195 12.3027 0.25781 3.5142-1.79057 5.74231-5.30827 6.89062-9.59179 1.14831-4.28353 1.33152-9.46804 0.73047-15.3496-1.20211-11.7631-5.59931-26.3393-12.8477-41.4004a2.50025 2.50025 0 1 0 -4.50391 2.16797c7.04207 14.6324 11.2587 28.7976 12.377 39.7402 0.559131 5.47132 0.329586 10.1317-0.585938 13.5469-0.915523 3.41516-2.40208 5.44928-4.33008 6.43164-2.00526 1.02174-4.66265 0.9871-8.14453-0.43359-3.48188-1.42068-7.59264-4.2304-11.8848-8.22461-8.5841-7.9881-17.9169-20.6542-25.703-35.9353-7.7858-15.2806-12.5447-30.282-13.959-41.9277-0.7071-5.8228-0.5643-10.8028 0.334-14.457 0.8983-3.65429 2.4346-5.82616 4.4395-6.84769 0.7527-0.38352 1.5482-0.60123 2.4902-0.67187 3.5055-0.26292 8.8781 2.03539 14.7793 6.93166a2.50025 2.50025 0 1 0 3.1914 -3.84768c-6.4065-5.31553-12.5771-8.50296-18.3457-8.07031z"/>
      <path fill={props.color} d="m73.5 61a7.5 7.5 0 0 1 -15 0 7.5 7.5 0 1 1 15 0z"/>
    </svg>
  );
};

module.exports = LogoAtom;
