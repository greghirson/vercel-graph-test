
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-24 02:15:00", "b": 525.0}, {"a": "2025-04-24 02:20:00", "b": 531.8}, {"a": "2025-04-24 02:25:00", "b": 530.2}, {"a": "2025-04-24 02:30:00", "b": 531.25}, {"a": "2025-04-24 02:35:00", "b": 535.4}, {"a": "2025-04-24 02:40:00", "b": 547.6}, {"a": "2025-04-24 02:45:00", "b": 546.5}, {"a": "2025-04-24 02:50:00", "b": 530.4}, {"a": "2025-04-24 02:55:00", "b": 523.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    