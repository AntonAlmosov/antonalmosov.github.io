(window.webpackJsonp=window.webpackJsonp||[]).push([["14b6"],{"2o27":function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),i=t("lnc6"),r=t.n(i),l=function(e){var a=e.data;return c.a.createElement("div",{className:r.a.serviceRow},c.a.createElement("span",null,a.title))},s=t("8SqN"),d=t.n(s);a.a=function(e){var a=e.isAccount,t=e.data;return c.a.createElement("div",{className:a?d.a.servicesTableWrapper:d.a.none},t.map(function(e){return c.a.createElement(l,{data:e})}),c.a.createElement("a",{className:d.a.servicesCall,href:"tel:8-499-323-43-95"},c.a.createElement("img",{src:"/static/phoneWhite.svg"}),c.a.createElement("span",null,"Узнать стоимость")))}},"7p+x":function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),i=t("5gSk"),r=t.n(i);a.a=function(e){var a=e.onClick,t=e.account;return c.a.createElement("div",{className:r.a.serviceSwitchWrapper},c.a.createElement("div",{onClick:a.bind(null,!0),className:r.a.serviceSwitchItem,id:t?"":r.a.active},"Бухгалтерия"),c.a.createElement("div",{onClick:a.bind(null,!1),className:r.a.serviceSwitchItem,id:t?r.a.active:""},"Юридические услуги"))}},IIzm:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/organisations",function(){var e=t("IlwV");return{page:e.default||e}}])},IlwV:function(e,a,t){"use strict";t.r(a);var n=t("0iUn"),c=t("sLSF"),i=t("MI3g"),r=t("a7VT"),l=t("AT/M"),s=t("Tit0"),d=t("q1tI"),o=t.n(d),u=t("m/Pd"),m=t.n(u),v=t("b0oO"),p=t("7p+x"),E=t("YIqH"),f=t("2o27"),h=t("VEIB"),x=t("yD/t"),w=(t("6j1l"),function(e){function a(){var e;return Object(n.default)(this,a),(e=Object(i.default)(this,Object(r.default)(a).call(this))).state={account:!0,data:x},e.handleChange=e.handleChange.bind(Object(l.default)(e)),e}return Object(s.default)(a,e),Object(c.default)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement("title",null,"Налоговый советник | Индивидуальные предприниматели")),o.a.createElement(v.a,null),o.a.createElement("style",{JSX:!0},"\n                    body{\n                        background-color: #DCC3A6;\n                    }\n                "),o.a.createElement(E.a,{heading:"Юридические лица"}),o.a.createElement(p.a,{onClick:this.handleChange,account:this.state.account}),o.a.createElement(f.a,{isAccount:this.state.account,data:this.state.data.account}),o.a.createElement(h.a,{isAccount:this.state.account,data:this.state.data.legal}))}},{key:"handleChange",value:function(e){this.setState({account:e})}}]),a}(o.a.Component));a.default=w},VEIB:function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),i=t("0iUn"),r=t("sLSF"),l=t("MI3g"),s=t("a7VT"),d=t("AT/M"),o=t("Tit0"),u=t("DZvK"),m=t.n(u),v=function(e){var a=e.title,t=e.expand,n=e.isExpanded;return c.a.createElement("div",{className:m.a.serviceRowHeading,onClick:t},c.a.createElement("h1",null,a),c.a.createElement("span",{className:n?m.a.rotate:""},"+"))},p=t("/LXU"),E=t.n(p),f=function(e){var a=e.data;return c.a.createElement("div",{className:E.a.tableRowWrapper},c.a.createElement("div",{className:E.a.rowTitle},a.serviceTitle),c.a.createElement("div",{className:E.a.rowPrice},a.price),c.a.createElement("div",{className:E.a.rowTax},a.tax),c.a.createElement("div",{className:E.a.rowFee},a.fee))},h=t("TfHu"),x=t.n(h),w=function(e){var a=e.isExpanded,t=e.data;return c.a.createElement("div",{className:a?x.a.serviceRowContent:x.a.none},c.a.createElement("div",{className:x.a.serviceRowDescription},c.a.createElement("img",{src:"/static/info.svg"}),c.a.createElement("p",null,t.description)),c.a.createElement("div",{className:x.a.serviceRowTable},c.a.createElement("div",{className:x.a.serviceRowTableHeading},c.a.createElement("div",{className:x.a.rowTitle},"Услуга"),c.a.createElement("div",{className:x.a.rowPrice},"Стоимость услуг"),c.a.createElement("div",{className:x.a.rowTax},"Гос. пошлина"),c.a.createElement("div",{className:x.a.rowFee},"Нотариальные расходы")),t.servicesArray.map(function(e){return c.a.createElement(f,{data:e})})))},T=t("xJTo"),b=t.n(T),N=function(e){function a(e){var t;return Object(i.default)(this,a),(t=Object(l.default)(this,Object(s.default)(a).call(this,e))).state={isExpanded:!1},t.expandHandler=t.expandHandler.bind(Object(d.default)(t)),t}return Object(o.default)(a,e),Object(r.default)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:b.a.serviceRow},c.a.createElement(v,{expand:this.expandHandler,title:this.props.data.title,isExpanded:this.state.isExpanded}),c.a.createElement(w,{isExpanded:this.state.isExpanded,data:this.props.data}))}},{key:"expandHandler",value:function(){this.setState({isExpanded:!this.state.isExpanded})}}]),a}(c.a.Component),g=t("SoL/"),I=t.n(g);a.a=function(e){var a=e.isAccount,t=e.data;return c.a.createElement("div",{className:a?I.a.none:I.a.serviceTableWrapper},t.map(function(e){return c.a.createElement(N,{data:e})}))}},YIqH:function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),i=t("YFqc"),r=t.n(i),l=t("uooY"),s=t.n(l);a.a=function(e){var a=e.heading;return c.a.createElement("div",{className:s.a.taxesWrapperHeader},c.a.createElement(r.a,{href:"/"},c.a.createElement("a",null,c.a.createElement("img",{src:"/static/chevronBack.svg"}))),c.a.createElement("h1",null,a))}},"yD/t":function(e){e.exports={account:[{title:"Постановка бухгалтерского учета с нуля"},{title:"Бухгалтерское сопровождение"},{title:"Помощь в подготовке технической документации"},{title:"Расчет заработной платы, зачисление налогов и взносов c заработной платы"}],legal:[{title:"Консультация",description:"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе",servicesArray:[{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"},{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"}]},{title:"Разработка договора",description:"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе",servicesArray:[{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"},{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"}]},{title:"Согласование договора",description:"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе",servicesArray:[{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"},{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"}]},{title:"Претензия",description:"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе",servicesArray:[{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"},{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"}]},{title:"Подготовка иска и участие в деле ",description:"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе",servicesArray:[{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"},{serviceTitle:"Создание  ООО, ПАО, АО",price:"7700₽",tax:"4000₽",fee:"3400₽"}]}]}}},[["IIzm","5d41","9da1","ad9d"]]]);