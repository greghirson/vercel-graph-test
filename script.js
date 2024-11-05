
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-04 17:30:00", "b": 443.0}, {"a": "2024-11-04 17:35:00", "b": 462.75}, {"a": "2024-11-04 17:40:00", "b": 450.4}, {"a": "2024-11-04 17:45:00", "b": 416.8}, {"a": "2024-11-04 17:50:00", "b": 414.8}, {"a": "2024-11-04 17:55:00", "b": 411.4}, {"a": "2024-11-04 18:00:00", "b": 413.0}, {"a": "2024-11-04 18:05:00", "b": 424.0}, {"a": "2024-11-04 18:10:00", "b": 419.0}, {"a": "2024-11-04 18:15:00", "b": 411.5}, {"a": "2024-11-04 18:20:00", "b": 419.0}, {"a": "2024-11-04 18:25:00", "b": 428.2}, {"a": "2024-11-04 18:30:00", "b": 436.6666666666667}, {"a": "2024-11-04 18:35:00", "b": 436.4}, {"a": "2024-11-04 18:40:00", "b": 426.6}, {"a": "2024-11-04 18:45:00", "b": 442.0}, {"a": "2024-11-04 18:50:00", "b": 473.6}, {"a": "2024-11-04 18:55:00", "b": 464.8}, {"a": "2024-11-04 19:00:00", "b": 485.4}, {"a": "2024-11-04 19:05:00", "b": 553.8}, {"a": "2024-11-04 19:10:00", "b": 589.0}, {"a": "2024-11-04 19:15:00", "b": 577.4}, {"a": "2024-11-04 19:20:00", "b": 574.4}, {"a": "2024-11-04 19:25:00", "b": 604.0}, {"a": "2024-11-04 19:30:00", "b": 595.0}, {"a": "2024-11-04 19:35:00", "b": 588.0}, {"a": "2024-11-04 19:40:00", "b": 578.2}, {"a": "2024-11-04 19:45:00", "b": 575.0}, {"a": "2024-11-04 19:50:00", "b": 611.0}, {"a": "2024-11-04 19:55:00", "b": 602.2}, {"a": "2024-11-04 20:00:00", "b": 592.5}, {"a": "2024-11-04 20:05:00", "b": 600.4}, {"a": "2024-11-04 20:10:00", "b": 607.6}, {"a": "2024-11-04 20:15:00", "b": 602.6}, {"a": "2024-11-04 20:20:00", "b": 609.0}, {"a": "2024-11-04 20:25:00", "b": 610.8}, {"a": "2024-11-04 20:30:00", "b": 630.0}, {"a": "2024-11-04 20:35:00", "b": 618.8}, {"a": "2024-11-04 20:40:00", "b": 599.75}, {"a": "2024-11-04 20:45:00", "b": 607.0}, {"a": "2024-11-04 20:50:00", "b": 605.4}, {"a": "2024-11-04 20:55:00", "b": 612.2}, {"a": "2024-11-04 21:00:00", "b": 618.25}, {"a": "2024-11-04 21:05:00", "b": 609.0}, {"a": "2024-11-04 21:10:00", "b": 615.8}, {"a": "2024-11-04 21:15:00", "b": 603.4}, {"a": "2024-11-04 21:20:00", "b": 606.4}, {"a": "2024-11-04 21:25:00", "b": 614.8}, {"a": "2024-11-04 21:30:00", "b": 618.4}, {"a": "2024-11-04 21:35:00", "b": 616.0}, {"a": "2024-11-04 21:40:00", "b": 607.0}, {"a": "2024-11-04 21:45:00", "b": 624.8}, {"a": "2024-11-04 21:50:00", "b": 622.6}, {"a": "2024-11-04 21:55:00", "b": 596.6}, {"a": "2024-11-04 22:00:00", "b": 606.6}, {"a": "2024-11-04 22:05:00", "b": 633.6}, {"a": "2024-11-04 22:10:00", "b": 612.8}, {"a": "2024-11-04 22:15:00", "b": 594.4}, {"a": "2024-11-04 22:20:00", "b": 603.8}, {"a": "2024-11-04 22:25:00", "b": 615.0}, {"a": "2024-11-04 22:30:00", "b": 610.0}, {"a": "2024-11-04 22:35:00", "b": 599.8}, {"a": "2024-11-04 22:40:00", "b": 585.8}, {"a": "2024-11-04 22:45:00", "b": 606.0}, {"a": "2024-11-04 22:50:00", "b": 588.6}, {"a": "2024-11-04 22:55:00", "b": 596.5}, {"a": "2024-11-04 23:00:00", "b": 620.2}, {"a": "2024-11-04 23:05:00", "b": 613.0}, {"a": "2024-11-04 23:10:00", "b": 588.25}, {"a": "2024-11-04 23:15:00", "b": 583.4}, {"a": "2024-11-04 23:20:00", "b": 560.0}, {"a": "2024-11-04 23:25:00", "b": 556.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    