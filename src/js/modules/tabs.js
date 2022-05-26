const tabs = (tabsHeaderSelector, tabsSelector, tabContentSelector, activeClass = '') => {
    const tabsHeader = document.querySelector(tabsHeaderSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabContent = document.querySelectorAll(tabContentSelector);


    const hideContent = () => {
        tabContent.forEach(el => {
            el.style.display = 'none';
        });
    };

    const showContent = (i = 0) => {
        tabContent[i].style.display = 'block';
    };

    const setActive = (i = 0) => {
        if (activeClass) {
            tabs.forEach((tab, index) => {
                tab.classList.remove(activeClass);
                if (tabs[i] === tab) {
                    tab.classList.add(activeClass);
                }
            });
        }
    };

    tabsHeader.addEventListener('click', (e) => {
        const condition = e.target.classList.contains(tabsSelector.split('.')[1]) ||
            e.target.parentNode.classList.contains(tabsSelector.split('.')[1]);

        const clickedTarget = e.target.parentNode;

        if (condition) {
            tabs.forEach((el, index) => {
                if (clickedTarget === el) {
                    hideContent();
                    showContent(index);
                    setActive(index);
                }
            });
        }
    });

    hideContent();
    showContent();
    setActive();
};

export default tabs;
