import { css, ThemedStyledProps } from 'styled-components';
import { ThemeAttributes, variables } from '@kata-kit/theme';

export const FormErrorBase = (props: ThemedStyledProps<{}, ThemeAttributes>) =>
  css`
    margin: 4px 0;
    color: ${props.theme.textColor};
    display: block;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
  `;

export const FormLabelBase = (props: ThemedStyledProps<{}, ThemeAttributes>) =>
  css`
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    text-align: left;
    color: ${props.theme.textColor};
  `;

export const FormHelpBase = css`
  display: inline-block;
  margin-top: 4px;
  font-size: ${variables.fontSizes.deka}px;
  line-height: ${variables.lineHeights.deka};
  color: ${variables.colors.neutral07};
`;

export const InputTextBase = (props: ThemedStyledProps<{}, ThemeAttributes>) =>
  css`
    display: block;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: ${props.theme.backgroundColor};
    border: 1px solid ${props.theme.borderColor};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
    outline: none;

    &::placeholder {
      color: ${props.theme.mutedTextColor};
    }

    &:disabled,
    &.disabled {
      background-color: ${props.theme.backgroundColorHover};
      color: ${props.theme.mutedTextColor};
    }

    &:not(:disabled):not(.disabled) {
      &:hover {
        background-color: ${props.theme.backgroundColorHover};
        border-color: ${props.theme.borderColorHover};
      }

      &:active,
      &:focus {
        background-color: ${props.theme.backgroundColorActive};
        border: 1px solid ${props.theme.borderColorHover};
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25),
          0 0 0 4px ${props.theme.focusOutlineColor};
      }
    }
  `;

export const InputAddonBase = (props: ThemedStyledProps<{}, ThemeAttributes>) =>
  css`
    display: flex;
  `;
