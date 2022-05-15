data = {
	header: {
		defaults: {
            topMenu: {
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
            },
			info: {
				0: {
					icon: 'place',
					text: 'Москва, ул. Верейская, 17 БЦ «Верейская Плаза 2» оф. 118А'
				}
			},
			logo: '%=static=%img/content/kg/logo.svg',
			menu: {
				0: {
					title: 'ОБОРУДОВАНИЕ',
					href: 'equipment.html',
                    logo: '%=static=%img/content/kg/equipment.svg',
				},
				1: {
					title: 'ЛИЗИНГ',
					href: 'vendors.html',
                    logo: '%=static=%img/content/kg/leasing.svg',
				},
				2: {
					title: 'СЕРВИС',
					href: 'services.html',
                    logo: '%=static=%img/content/kg/service.svg',
				},
			},
			callback: {
				phone: '+7 (495) 215 24 25',
				link: {
					title: 'Обратный звонок',
					href: '#modalCallback',
					attributes: {
						'data-toggle': 'modal'
					}
				}
			}
		}
	}
};
