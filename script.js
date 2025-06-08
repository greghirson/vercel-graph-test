
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-06-07 18:00:00", "b": 4477.0}, {"a": "2025-06-07 18:05:00", "b": 3750.0}, {"a": "2025-06-07 18:10:00", "b": 1694.0}, {"a": "2025-06-07 18:15:00", "b": 2120.0}, {"a": "2025-06-07 18:20:00", "b": 3873.4}, {"a": "2025-06-07 18:25:00", "b": 4834.333333333333}, {"a": "2025-06-07 18:30:00", "b": 500.0}, {"a": "2025-06-07 18:35:00", "b": 5000.0}, {"a": "2025-06-07 18:50:00", "b": 450.5}, {"a": "2025-06-07 18:55:00", "b": 5000.0}, {"a": "2025-06-07 20:25:00", "b": 2689.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    