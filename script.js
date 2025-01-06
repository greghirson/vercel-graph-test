
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-05 18:05:00", "b": 559.3333333333334}, {"a": "2025-01-05 18:10:00", "b": 692.0}, {"a": "2025-01-05 18:15:00", "b": 704.0}, {"a": "2025-01-05 18:20:00", "b": 724.4}, {"a": "2025-01-05 18:25:00", "b": 792.75}, {"a": "2025-01-05 18:30:00", "b": 841.6}, {"a": "2025-01-05 18:35:00", "b": 867.2}, {"a": "2025-01-05 18:40:00", "b": 845.4}, {"a": "2025-01-05 18:45:00", "b": 844.4}, {"a": "2025-01-05 18:50:00", "b": 854.6}, {"a": "2025-01-05 18:55:00", "b": 835.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    