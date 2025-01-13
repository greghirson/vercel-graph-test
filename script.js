
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-13 09:20:00", "b": 455.3333333333333}, {"a": "2025-01-13 09:25:00", "b": 446.3333333333333}, {"a": "2025-01-13 09:30:00", "b": 442.5}, {"a": "2025-01-13 09:35:00", "b": 445.6}, {"a": "2025-01-13 09:40:00", "b": 434.8}, {"a": "2025-01-13 09:45:00", "b": 416.2}, {"a": "2025-01-13 09:50:00", "b": 418.3333333333333}, {"a": "2025-01-13 09:55:00", "b": 429.0}, {"a": "2025-01-13 10:45:00", "b": 407.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    