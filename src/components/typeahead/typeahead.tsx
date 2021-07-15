import React, { useEffect, useState } from 'react';

import './typeahead.css';

export interface ITypeahead {
  options: string[];
  onChange: (choice: string) => void;
  value: string;
}

export const Typeahead = React.forwardRef<HTMLInputElement, ITypeahead>((props, ref) => {
  const { onChange, options, value } = props;
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    setSearchText(value);
  }, [value]);

  const handleChange = (event: any) => {
    const text = event.target.value;
    setSearchText(text);
    filter(text);
    onChange('');
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && filteredOptions.length) {
      event.preventDefault();
      const text = filteredOptions[0];
      setSearchText(text);
      filter('');
      onChange(text);
    }
  };

  const onClick = (choice: string) => {
    setSearchText(choice);
    filter('');
    onChange(choice);
  };

  const filter = (text: string) => {
    const filtered = text
      ? options.filter((option) => option.toLowerCase().includes(text.toLowerCase()))
      : [];
    setFilteredOptions(filtered);
  };

  return (
    <div className="typeahead">
      <input
        ref={ref}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchText}
        placeholder="start typing..."
      />
      {filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option) => {
            return (
              <li key={option}>
                <a onClick={() => onClick(option)}>{option}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});
