
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-18 15:45:00", "b": 439.5}, {"a": "2024-11-18 15:50:00", "b": 595.4}, {"a": "2024-11-18 15:55:00", "b": 630.6}, {"a": "2024-11-18 16:00:00", "b": 662.8}, {"a": "2024-11-18 16:05:00", "b": 694.8}, {"a": "2024-11-18 16:10:00", "b": 724.6}, {"a": "2024-11-18 16:15:00", "b": 737.0}, {"a": "2024-11-18 16:20:00", "b": 754.0}, {"a": "2024-11-18 16:25:00", "b": 782.0}, {"a": "2024-11-18 16:30:00", "b": 800.25}, {"a": "2024-11-18 16:35:00", "b": 817.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    