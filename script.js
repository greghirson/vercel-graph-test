
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-25 17:00:00", "b": 437.8}, {"a": "2025-04-25 17:05:00", "b": 431.0}, {"a": "2025-04-25 17:10:00", "b": 431.75}, {"a": "2025-04-25 17:15:00", "b": 447.75}, {"a": "2025-04-25 17:20:00", "b": 458.0}, {"a": "2025-04-25 17:25:00", "b": 443.0}, {"a": "2025-04-25 17:30:00", "b": 443.2}, {"a": "2025-04-25 17:35:00", "b": 453.6}, {"a": "2025-04-25 17:40:00", "b": 452.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    