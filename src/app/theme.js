import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Функция для создания темы с выбранной палитрой цветов
const createCustomTheme = (isDarkMode) => {
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light", // Включение режима светлой или темной темы
            primary: {
                main: isDarkMode ? "#FFFFFF" : "#000000", // Белый цвет в темной теме, черный цвет в светлой теме
            },
            secondary: {
                main: "#2196f3", // Синий цвет (общий для обоих тем)
            },
            text: {
                primary: isDarkMode ? "#FFFFFF" : "#000000", // Белый цвет текста в темной теме, черный цвет текста в светлой теме
                secondary: isDarkMode ? "#000000" : "#FFFFFF", // Черный цвет текста в темной теме, белый цвет текста в светлой теме
            },
        },
    });

    return responsiveFontSizes(theme);
};

const lightTheme = createCustomTheme(false); // Создание светлой темы
const darkTheme = createCustomTheme(true); // Создание темной темы

export { lightTheme, darkTheme };
