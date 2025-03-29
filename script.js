
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-29 06:00:00", "b": 441.4}, {"a": "2025-03-29 06:05:00", "b": 451.8}, {"a": "2025-03-29 06:10:00", "b": 447.6}, {"a": "2025-03-29 06:15:00", "b": 447.25}, {"a": "2025-03-29 06:20:00", "b": 452.8}, {"a": "2025-03-29 06:25:00", "b": 451.0}, {"a": "2025-03-29 06:30:00", "b": 441.75}, {"a": "2025-03-29 06:35:00", "b": 444.75}, {"a": "2025-03-29 06:40:00", "b": 443.25}, {"a": "2025-03-29 06:45:00", "b": 442.5}, {"a": "2025-03-29 06:50:00", "b": 451.8}, {"a": "2025-03-29 06:55:00", "b": 444.75}, {"a": "2025-03-29 07:00:00", "b": 450.0}, {"a": "2025-03-29 07:05:00", "b": 454.6}, {"a": "2025-03-29 07:10:00", "b": 459.4}, {"a": "2025-03-29 07:15:00", "b": 470.4}, {"a": "2025-03-29 07:20:00", "b": 466.0}, {"a": "2025-03-29 07:25:00", "b": 471.6}, {"a": "2025-03-29 07:30:00", "b": 473.0}, {"a": "2025-03-29 07:35:00", "b": 468.4}, {"a": "2025-03-29 07:40:00", "b": 463.4}, {"a": "2025-03-29 07:45:00", "b": 457.8}, {"a": "2025-03-29 07:50:00", "b": 460.4}, {"a": "2025-03-29 07:55:00", "b": 471.0}, {"a": "2025-03-29 08:00:00", "b": 467.25}, {"a": "2025-03-29 08:05:00", "b": 469.75}, {"a": "2025-03-29 08:10:00", "b": 467.25}, {"a": "2025-03-29 08:15:00", "b": 456.75}, {"a": "2025-03-29 08:20:00", "b": 455.0}, {"a": "2025-03-29 08:25:00", "b": 461.5}, {"a": "2025-03-29 08:30:00", "b": 471.75}, {"a": "2025-03-29 08:35:00", "b": 470.2}, {"a": "2025-03-29 08:40:00", "b": 462.75}, {"a": "2025-03-29 08:45:00", "b": 475.0}, {"a": "2025-03-29 08:50:00", "b": 474.8}, {"a": "2025-03-29 08:55:00", "b": 463.25}, {"a": "2025-03-29 09:00:00", "b": 454.0}, {"a": "2025-03-29 09:05:00", "b": 461.75}, {"a": "2025-03-29 09:10:00", "b": 468.2}, {"a": "2025-03-29 09:15:00", "b": 461.75}, {"a": "2025-03-29 09:20:00", "b": 466.0}, {"a": "2025-03-29 09:25:00", "b": 451.4}, {"a": "2025-03-29 09:30:00", "b": 463.4}, {"a": "2025-03-29 09:35:00", "b": 466.25}, {"a": "2025-03-29 09:40:00", "b": 462.75}, {"a": "2025-03-29 09:45:00", "b": 470.0}, {"a": "2025-03-29 09:50:00", "b": 469.0}, {"a": "2025-03-29 09:55:00", "b": 465.0}, {"a": "2025-03-29 10:00:00", "b": 458.8}, {"a": "2025-03-29 10:05:00", "b": 459.2}, {"a": "2025-03-29 10:10:00", "b": 454.8}, {"a": "2025-03-29 10:15:00", "b": 482.0}, {"a": "2025-03-29 10:20:00", "b": 473.4}, {"a": "2025-03-29 10:25:00", "b": 458.5}, {"a": "2025-03-29 10:30:00", "b": 460.2}, {"a": "2025-03-29 10:35:00", "b": 471.25}, {"a": "2025-03-29 10:40:00", "b": 469.8}, {"a": "2025-03-29 10:45:00", "b": 455.0}, {"a": "2025-03-29 10:50:00", "b": 462.4}, {"a": "2025-03-29 10:55:00", "b": 466.4}, {"a": "2025-03-29 11:00:00", "b": 460.0}, {"a": "2025-03-29 11:05:00", "b": 439.75}, {"a": "2025-03-29 11:10:00", "b": 433.2}, {"a": "2025-03-29 11:15:00", "b": 431.0}, {"a": "2025-03-29 11:20:00", "b": 444.0}, {"a": "2025-03-29 11:25:00", "b": 463.6}, {"a": "2025-03-29 11:30:00", "b": 456.6666666666667}, {"a": "2025-03-29 11:35:00", "b": 455.75}, {"a": "2025-03-29 11:40:00", "b": 465.5}, {"a": "2025-03-29 11:45:00", "b": 455.0}, {"a": "2025-03-29 11:50:00", "b": 458.0}, {"a": "2025-03-29 11:55:00", "b": 452.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    