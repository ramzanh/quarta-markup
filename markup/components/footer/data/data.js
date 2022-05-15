data = {
	footer: {
		defaults: {
			columns: {
				0: {
					logo: '%=static=%img/content/kg/logo-square.svg',
					description: '© 2022. Все права защищены'
				},
				1: {
					heading: 'Меню',
					menu: {
                        0: {
                            title: 'О компании',
                            href: 'about.html'
                        },
                        1: {
                            title: 'Карьера',
                            href: 'career.html'
                        },
                        2: {
                            title: 'Контакты',
                            href: 'contacts.html'
                        }
					}
				},
				2: {
					heading: 'Информация',
					address: {
						icon: null,
						text: 'Москва, ул. Верейская, 17<br>БЦ «Верейская Плаза 2» оф. 118А'
					},
					clocks: {
						icon: 'access_time',
						text: 'Пн – Сб 09:00 – 18:00,<br>Вс – выходной'
					},
					mail: {
						icon: 'mail_outline',
						text: '<a href="mailto:info@quartagroup.ru">info@quartagroup.ru</a>'
					}
				},
				3: {
					heading: 'Контакты',
					callback: {
						phone: '+7 (495) 215 24 25',
						link: {
							title: 'Обратный звонок',
							href: '#modalCallback',
							attributes: {
								'data-toggle': 'modal'
							}
						}
					},
				}
			},
			copyright: {
				text: '© 2018 «Магистраль Технологии»',
				links: {
					0: {
						title: 'Политика конфиденциальности',
						href: '#'
					},
					1: {
						title: 'Правовые документы',
						href: '#'
					}
				}
			}
		}
	}
};
