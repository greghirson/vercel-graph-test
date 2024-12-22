
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-21 13:00:00", "b": 686.2}, {"a": "2024-12-21 13:05:00", "b": 691.4}, {"a": "2024-12-21 13:10:00", "b": 681.8}, {"a": "2024-12-21 13:15:00", "b": 666.2}, {"a": "2024-12-21 13:20:00", "b": 665.3333333333334}, {"a": "2024-12-21 13:25:00", "b": 676.6}, {"a": "2024-12-21 13:30:00", "b": 680.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    