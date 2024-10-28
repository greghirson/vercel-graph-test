
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-28 01:50:00", "b": 450.0}, {"a": "2024-10-28 01:55:00", "b": 444.6666666666667}, {"a": "2024-10-28 02:00:00", "b": 437.0}, {"a": "2024-10-28 02:05:00", "b": 439.0}, {"a": "2024-10-28 02:10:00", "b": 435.25}, {"a": "2024-10-28 02:15:00", "b": 441.6}, {"a": "2024-10-28 02:20:00", "b": 453.6}, {"a": "2024-10-28 02:25:00", "b": 447.25}, {"a": "2024-10-28 02:30:00", "b": 438.25}, {"a": "2024-10-28 02:35:00", "b": 436.5}, {"a": "2024-10-28 02:40:00", "b": 445.2}, {"a": "2024-10-28 02:45:00", "b": 440.75}, {"a": "2024-10-28 02:50:00", "b": 437.0}, {"a": "2024-10-28 02:55:00", "b": 443.2}, {"a": "2024-10-28 03:00:00", "b": 451.4}, {"a": "2024-10-28 03:05:00", "b": 453.5}, {"a": "2024-10-28 03:10:00", "b": 450.6}, {"a": "2024-10-28 03:15:00", "b": 449.0}, {"a": "2024-10-28 03:20:00", "b": 440.25}, {"a": "2024-10-28 03:25:00", "b": 444.6}, {"a": "2024-10-28 03:30:00", "b": 453.25}, {"a": "2024-10-28 03:35:00", "b": 455.0}, {"a": "2024-10-28 03:40:00", "b": 452.0}, {"a": "2024-10-28 03:45:00", "b": 449.25}, {"a": "2024-10-28 03:50:00", "b": 439.0}, {"a": "2024-10-28 03:55:00", "b": 442.25}, {"a": "2024-10-28 04:00:00", "b": 448.75}, {"a": "2024-10-28 04:05:00", "b": 449.5}, {"a": "2024-10-28 04:10:00", "b": 454.8}, {"a": "2024-10-28 04:15:00", "b": 456.0}, {"a": "2024-10-28 04:20:00", "b": 456.0}, {"a": "2024-10-28 04:25:00", "b": 455.6}, {"a": "2024-10-28 04:30:00", "b": 454.8}, {"a": "2024-10-28 04:35:00", "b": 452.0}, {"a": "2024-10-28 04:40:00", "b": 454.0}, {"a": "2024-10-28 04:45:00", "b": 446.2}, {"a": "2024-10-28 04:50:00", "b": 451.2}, {"a": "2024-10-28 04:55:00", "b": 455.2}, {"a": "2024-10-28 05:00:00", "b": 456.0}, {"a": "2024-10-28 05:05:00", "b": 448.0}, {"a": "2024-10-28 05:10:00", "b": 445.6666666666667}, {"a": "2024-10-28 05:15:00", "b": 449.8}, {"a": "2024-10-28 05:20:00", "b": 450.6}, {"a": "2024-10-28 05:25:00", "b": 454.5}, {"a": "2024-10-28 05:30:00", "b": 461.6}, {"a": "2024-10-28 05:35:00", "b": 452.6}, {"a": "2024-10-28 05:40:00", "b": 449.5}, {"a": "2024-10-28 05:45:00", "b": 454.75}, {"a": "2024-10-28 05:50:00", "b": 474.6}, {"a": "2024-10-28 05:55:00", "b": 467.25}, {"a": "2024-10-28 06:00:00", "b": 459.4}, {"a": "2024-10-28 06:05:00", "b": 468.0}, {"a": "2024-10-28 06:10:00", "b": 456.75}, {"a": "2024-10-28 06:15:00", "b": 454.6}, {"a": "2024-10-28 06:20:00", "b": 461.3333333333333}, {"a": "2024-10-28 06:25:00", "b": 464.0}, {"a": "2024-10-28 06:30:00", "b": 454.0}, {"a": "2024-10-28 06:35:00", "b": 464.8}, {"a": "2024-10-28 06:40:00", "b": 455.0}, {"a": "2024-10-28 06:45:00", "b": 452.6666666666667}, {"a": "2024-10-28 06:50:00", "b": 461.0}, {"a": "2024-10-28 06:55:00", "b": 464.8}, {"a": "2024-10-28 07:00:00", "b": 473.2}, {"a": "2024-10-28 07:05:00", "b": 464.4}, {"a": "2024-10-28 07:10:00", "b": 457.6}, {"a": "2024-10-28 07:15:00", "b": 457.6666666666667}, {"a": "2024-10-28 07:20:00", "b": 451.8}, {"a": "2024-10-28 07:25:00", "b": 451.6}, {"a": "2024-10-28 07:30:00", "b": 471.8}, {"a": "2024-10-28 07:35:00", "b": 480.0}, {"a": "2024-10-28 07:40:00", "b": 478.25}, {"a": "2024-10-28 07:45:00", "b": 487.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    